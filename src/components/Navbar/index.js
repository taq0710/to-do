import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faEllipsisVertical,
    faCalendar,
    faChevronDown,
    faPlus,
    faSearch,
    faTable,
    faTableCells,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Buttons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss'
const cx = classNames.bind(styles)
function NavBar() {
    return ( 
        <>
        <h1>
                {' '}
                <FontAwesomeIcon icon={faBriefcase} />
                Team Tasks
            </h1>
            <div className={cx('nav-bar')}>
                <div className='left-item-nav'>
                    <Button nonBorder leftIcon={<FontAwesomeIcon icon={faTable} />}>
                        Board.By Status
                    </Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon icon={faTable} />}>
                        Board.By Assignee
                    </Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon icon={faTable} />}>
                        Assigned to Me
                    </Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon icon={faTableCells} />}>
                        All Tasks
                    </Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon icon={faCalendar} />}>
                        Calender
                    </Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon icon={faPlus} />}></Button>
                </div>
                <div className={cx('right-item-nav')}>
                    <Button addBtn>Filter</Button>
                    <Button addBtn>Sort</Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon  icon={faSearch} />}></Button>
                    <Button
                        addBtn
                        leftIcon={<FontAwesomeIcon  icon={faEllipsisVertical} />}
                    ></Button>
                    <Button moreBtn rightIcon={<FontAwesomeIcon icon={faChevronDown} />}>
                        New
                    </Button>
                </div>
            </div></>
     );
}

export default NavBar;
