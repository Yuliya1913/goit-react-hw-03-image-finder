import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { pixabayApi } from 'service/pixabay_api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    imgData: [],
    page: 1,
    isLoading: false,
    error: '',
    isModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        // если предыдущее значение query или page не совпадает с настоящими, то делаем запрос с новыми значениями
        const images = await pixabayApi(query, page);

        // достаем из пришедшего объекта данных массив объектов с данными изображений
        const { hits } = images;
        const { totalHits } = images;
        const { total } = images;

        // если на введенный запрос не существует данных, то выводим сообщение об этом
        if (hits.length === 0) {
          alert('Таких данных не существует, введите новый запрос');
          return;
        }

        // переберем массив и создадим новый только с "нужными" свойсвами объектов массива
        const newHits = hits.map(({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        });

        // записываем полученные данные в массив изображений imgData,
        // предварительно распыляя предыдущие данные(если они уже есть), а также
        // общее количество бесплатных картинок
        this.setState(prevState => {
          return {
            imgData: [...prevState.imgData, ...newHits],
            totalImage: totalHits,
            total: total,
          };
        });
      } catch (error) {
        this.setState({ error: 'Что-то пошло не так!!!' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  // при сабмите формы записываем в state новые значение свойств объекта
  // (учитывая, что при следующем сабмите приводим массив данных imgData к начальному -
  // пустому массиву и номерации страницы)
  getQuery = valueInput => {
    if (valueInput === this.state.query) {
      alert('Введите новое значение для поиска');
      return;
    }
    this.setState({ query: valueInput, imgData: [], page: 1, totalImage: 0 });
  };

  // при клике на кнопку загрузить еще увеличивает нумерацию страницы
  btnLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = largeImageURL => {
    this.setState(state => ({
      isModal: !state.isModal,
      active: largeImageURL,
    }));
  };

  render() {
    const {
      imgData,
      page,
      totalImage,
      total,
      isLoading,
      error,
      isModal,
      active,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.getQuery} />
        {/* если картинки загружаются выводим сообщение о загрузке */}
        {isLoading && <Loader />}

        {/*  Если будет ошибка - выводим сообщение  */}
        {error && <p>{error}</p>}

        {/* Если данные в массиве с изображениями есть - рендерим */}
        {imgData.length > 0 && (
          <ImageGallery imagesData={imgData} onClick={this.toggleModal} />
        )}

        {/* если в массиве с изображениями есть данные и суммарные пришедшие бесплатные 
        картинки не превышают общее количество бесплатных картинок
        то рендерем кнопку, а также когда общее количество дотупных картинок больше тех что нужно вывести*/}
        {imgData.length > 0 &&
          imgData.length * page <= totalImage &&
          imgData.length * page < total && (
            <Button onClick={this.btnLoadMore} />
          )}

        {isModal && (
          <Modal active={active} onClick={this.toggleModal}>
            <button
              className={css.modal_button}
              type="button"
              onClick={this.toggleModal}
            >
              Close image
            </button>
          </Modal>
        )}
      </>
    );
  }
}
