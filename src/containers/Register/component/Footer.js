import {Button} from 'antd-mobile';
import style from '../index.module.scss';
import PropTypes from 'prop-types';





const Footer = ({
    onClickNextStep,
    disabled,
}) => (
    <div className= {style.footer}>
    <Button className={disabled ?style.footerButtonDisabled: style.footerButton} onClick={onClickNextStep}>Next Step</Button>
</div>
);

Footer.propTypes = {
    onClickNextStep: PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired,
};

export default Footer;