import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import DatePicker from './DatePicker';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import styles from './index.styl';

class DateTimeRangePicker extends PureComponent {
    static propTypes = {
        locale: PropTypes.string,
        startDate: PropTypes.string,
        startTime: PropTypes.string,
        endDate: PropTypes.string,
        endTime: PropTypes.string,
        onChangeStartDate: PropTypes.func,
        onChangeStartTime: PropTypes.func,
        onChangeEndDate: PropTypes.func,
        onChangeEndTime: PropTypes.func
    };

    render() {
        const {
            locale,
            startDate,
            startTime,
            endDate,
            endTime,
            onChangeStartDate,
            onChangeStartTime,
            onChangeEndDate,
            onChangeEndTime
        } = this.props;

        return (
            <div className={styles.datePickerPane}>
                <div className={styles.datePickerPaneHeader}>
                    <div className={styles.dateTimeContainer}>
                        <div className={styles.inputIconGroup}>
                            <DateInput
                                value={startDate}
                                onChange={onChangeStartDate}
                            />
                        </div>
                        <div className={styles.inputIconGroup}>
                            <TimeInput
                                value={startTime}
                                onChange={onChangeStartTime}
                            />
                        </div>
                    </div>
                    <div className={styles.tilde}>~</div>
                    <div className={styles.dateTimeContainer}>
                        <div className={styles.inputIconGroup}>
                            <DateInput
                                value={endDate}
                                onChange={onChangeEndDate}
                            />
                        </div>
                        <div className={styles.inputIconGroup}>
                            <TimeInput
                                value={endTime}
                                onChange={onChangeEndTime}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.datePickerPaneBody}>
                    <div className={styles.datePickerPaneContainer}>
                        <DatePicker
                            locale={locale}
                            date={startDate}
                            onChange={onChangeStartDate}
                        />
                    </div>
                    <div className={styles.datePickerPaneContainer}>
                        <DatePicker
                            locale={locale}
                            date={endDate}
                            onChange={onChangeEndDate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DateTimeRangePicker;
