import { faBriefcase, faCalendar, faPlusCircle, faSearch, faTable, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalStyles from './components/GlobalStyles';
import classNames from 'classnames/bind';
import { MoreIcoin } from './components/CustomIcon';
import BoardTitleContainer from './components/BoardTitleContainer';
const cx = classNames.bind(GlobalStyles);
const App = () => {
    return (
        <>
            <h1> <FontAwesomeIcon icon={faBriefcase}/>Team Tasks</h1>
            <div className={cx('nav-bar')}>
                <div className={cx('board-name')}>
                    <div className={cx('board ')}>
                        <FontAwesomeIcon className={cx('icon-margin')} icon={faTable} />
                        Board.By Status
                    </div>
                    <div className={cx('board board-color')}>
                        <FontAwesomeIcon className={cx('icon-margin')} icon={faTable} />
                        Board.By Assignee
                    </div>
                    <div className={cx('board board-color')}>
                        <FontAwesomeIcon className={cx('icon-margin')} icon={faTable} />
                        Assigned to Me
                    </div>
                    <div className={cx('board board-color')}>
                        <FontAwesomeIcon className={cx('icon-margin')} icon={faTableCells} />
                        All Tasks
                    </div>
                    <div className={cx('board board-color')}>
                        <FontAwesomeIcon className={cx('icon-margin')} icon={faCalendar} />
                        Calendar
                    </div>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </div>
                <div className={cx('left-item-nav')}>
                  <p className={cx('left-item')}>Filter</p>
                  <p className={cx('left-item')}>Sort</p>
                  <FontAwesomeIcon className={cx('left-item')} icon={faSearch}/>
                  <MoreIcoin className={cx('left-item')}/>
                </div>
            </div>
            <BoardTitleContainer/>
        </>
    );
};

export default App;
