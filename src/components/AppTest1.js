import React, { Component } from 'react';
import AppTest2 from './AppTest2';
import SortableList from './SortableList';
import {
  App,
  Swiper,
  SwiperSlide,
} from 'framework7-react';
import styles from '../css/AppTest1.module.scss';

export default class AppTest1 extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    this.handleClick = this.handleClick.bind(this);
  }
  show(swiper) {
    console.log(swiper.activeIndex);
    this.setState({
      [swiper.$el[0].id]: swiper.activeIndex,
    })
  }
  componentDidMount() {
    //const mySwiper = new Swiper(".swiper-container", { speed: 100 });
    //mySwiper.init();
    //console.log(mySwiper);

    // [id^=swiper] は id属性を swiperという文字列で前方一致検索という意味
    const nodeList = document.querySelectorAll("[id^=swiper]")
    const node = Array.prototype.slice.call(nodeList);
    node.forEach(
      (ele)=> {
        ele.swiper.on('slideChangeTransitionEnd', ()=> { this.show(ele.swiper) })
      }
    )

    // IE11だと下記が動かないので、上記で対応。
    //   参考：https://qiita.com/snjssk/items/8d179566b023703c0663
    //document.querySelectorAll("[id^=swiper]").forEach(
    //  (ele)=> {
    //    ele.swiper.on('slideChangeTransitionEnd', ()=> { this.show(ele.swiper) })
    //  }
    //)
    
    //this.swiper1 = document.querySelector("#swiper1").swiper;
    //this.swiper1.on('slideChangeTransitionEnd', ()=> { this.show(this.swiper1) });
    //this.swiper2 = document.querySelector(".swiper-container.swiper2").swiper;
    //this.swiper2.on('slideChangeTransitionEnd', ()=> { this.show(this.swiper2) });
  }

  handleClick(e, swiperId) {
    const swiper = document.querySelector(`#${swiperId}`).swiper;
    switch(e.target.value) {
      case 'prev':
      case 'down':
        swiper.slidePrev();
        break;
      case 'next':
      case 'up':
        swiper.slideNext();
        break;
      default:
    }
  }

  handleSpeedChange(e, swiperId) {
    document.querySelector(`#${swiperId}`).swiper.params.speed = parseInt(e.target.value);
  }

  render() {
    const swiperId1 = "swiper1";
    const swiperId2 = "swiper2";
    return (
      // Appタグで囲むのはframework7使うにあたって必須っぽい
      <App>
        <SortableList />
        <i className="f7-icons">home</i>

        {/*
            paramsのheightは、SwiperSlideの高さの指定である。
            direction:"vertical"を使用する場合は、このheightの指定と、
            autoHeight:trueが必要である。でないと、SwiperSlideの高さが
            おかしくなる。
        */}
        <Swiper params={{direction:"vertical", height:100, autoHeight:true}} id={swiperId1} className={styles.my}>
          <SwiperSlide className={styles.slide}>Slide 0</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
        </Swiper>
        <input type="button" value="up" onClick={(e) => this.handleClick(e, swiperId1)} />
        <input type="button" value="down" onClick={(e) => this.handleClick(e, swiperId1)} />
        <div>SlideIndex:{this.state.swiper1}</div>
        <hr />

        <Swiper params={{speed: 1000}} id={swiperId2} className={styles.my}>
          <SwiperSlide>スライド 0</SwiperSlide>
          <SwiperSlide>スライド 1</SwiperSlide>
          <SwiperSlide>スライド 2</SwiperSlide>
        </Swiper>
        <input type="button" value="next" onClick={(e) => this.handleClick(e, swiperId2)} />
        <input type="button" value="prev" onClick={(e) => this.handleClick(e, swiperId2)} />
        {/*
            下記のinputフォームの枠線はcssで明示的に指定している。
            framework7のデフォルトで枠線無し担ってしまう模様。
        */}
        <br />
        <label htmlFor="speed">
          スライドスピード変更
          <input type="text" onChange={(e) => this.handleSpeedChange(e, swiperId2)} />
        </label>
        <div>SlideIndex:{this.state.swiper2}</div>
        <hr />

        <AppTest2 />
        <hr />

      </App>
		)
  }

};
