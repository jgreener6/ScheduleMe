import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Alert, Calendar, Button, Modal } from 'antd';

interface ScheduledJob {
  id: number;
  title: string;
  date: string; // Date of the scheduled job in "YYYY-MM-DD" format
  // Add other job details as needed
}

interface VendorSchedule {
  unavailableDates: string[]; // List of dates when the vendor is unavailable
  scheduledJobs: ScheduledJob[]; // List of scheduled jobs
}

const CalendarComponent: React.FC = () => {
  const [vendorSchedule, setVendorSchedule] = useState<VendorSchedule>({
    unavailableDates: [],
    scheduledJobs: [],
  });

  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(undefined);

  const addUnavailableDate = (date: string) => {
    setVendorSchedule({
      ...vendorSchedule,
      unavailableDates: [...vendorSchedule.unavailableDates, date],
    });
  };

  const removeUnavailableDate = (date: string) => {
    setVendorSchedule({
      ...vendorSchedule,
      unavailableDates: vendorSchedule.unavailableDates.filter((d) => d !== date),
    });
  };

  const addScheduledJob = (job: ScheduledJob) => {
    setVendorSchedule({
      ...vendorSchedule,
      scheduledJobs: [...vendorSchedule.scheduledJobs, job],
    });
  };

  const removeScheduledJob = (jobId: number) => {
    setVendorSchedule({
      ...vendorSchedule,
      scheduledJobs: vendorSchedule.scheduledJobs.filter((job) => job.id !== jobId),
    });
  };

  const handleDateClick = (date: Dayjs) => {
    const dateString = date.format('YYYY-MM-DD');
    setSelectedDate(date);

    if (vendorSchedule.unavailableDates.includes(dateString)) {
      // Date is currently unavailable, ask to remove it
      Modal.confirm({
        title: 'Remove Unavailability',
        content: 'Do you want to make this date available?',
        onOk: () => removeUnavailableDate(dateString),
      });
    } else {
      // Date is currently available, ask to block it
      Modal.confirm({
        title: 'Block Date',
        content: 'Do you want to block this date as unavailable?',
        onOk: () => addUnavailableDate(dateString),
      });
    }
  };

  const dateCellRender = (date: Dayjs) => {
    const dateString = date.format('YYYY-MM-DD');
    const isUnavailable = vendorSchedule.unavailableDates.includes(dateString);
    const isScheduled = vendorSchedule.scheduledJobs.some((job) => job.date === dateString);

    if (isUnavailable) {
      return <div className="unavailable-day">{date.date()}</div>;
    }
    if (isScheduled) {
      return <div className="scheduled-job">{date.date()}</div>;
    }

    return date.date();
  };

  const monthCellRender = (date: Dayjs) => {
    // Customize the rendering of month cells if needed
    return date.date();
  };

  return (
    <div>
      <Alert
        message={`You selected date: ${selectedDate?.format('YYYY-MM-DD')}`}
        showIcon
        style={{ marginBottom: '16px' }}
      />
      <Calendar
        value={selectedDate}
        onSelect={handleDateClick}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
     
    </div>
  );
};

export default CalendarComponent;
