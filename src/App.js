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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalStyles from './components/GlobalStyles';
import classNames from 'classnames/bind';
import BoardTitleContainer from './components/BoardTitleContainer';
import Button from './components/Buttons';
const cx = classNames.bind(GlobalStyles);
const App = () => {
    return (
        <>
            <h1>
                {' '}
                <FontAwesomeIcon icon={faBriefcase} />
                Team Tasks
            </h1>
            <div className={cx('nav-bar')}>
                <div className={cx('board-name')}>
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
                <div className={cx('left-item-nav')}>
                    <Button addBtn>Filter</Button>
                    <Button addBtn>Sort</Button>
                    <Button addBtn leftIcon={<FontAwesomeIcon className={cx('left-item')} icon={faSearch} />}></Button>
                    <Button
                        addBtn
                        leftIcon={<FontAwesomeIcon className={cx('left-item')} icon={faEllipsisVertical} />}
                    ></Button>
                    <Button moreBtn rightIcon={<FontAwesomeIcon icon={faChevronDown} />}>
                        New
                    </Button>
                </div>
            </div>
            <BoardTitleContainer />
        </>
    );
};

export default App;
