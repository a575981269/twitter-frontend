import { CloseOutline } from 'antd-mobile-icons';
import style from './index.module.css'; //module.css
import logo from '../../assets/twitter-logo.svg';


export default () => (
    <div className={style.header}>
    <CloseOutline className={style.closeIcon}/>
    <img src = {logo} alt = "twitter-logo" className={style.twitterLogo}/>
</div>
);