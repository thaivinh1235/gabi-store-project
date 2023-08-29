import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            style={{
                'marginLeft': '10px',
                'marginTop': '-10px',
                'width': '100%',
                'justifyContent': 'flex-start',
                'cursor': 'pointer',
                'fontWeight' : '500', 
                'lineHeight' : '1.8rem'
            }}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItems;
