import React from 'react';

export default function DateTime({data}) {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = data.getDay();
  const hours = String(data.getHours()).padStart(2, '0');
  const minutes = String(data.getMinutes()).padStart(2, '0');

  return (
    <h6 className="text-center last_updated">
      Last updated: {weekDays[day]} {hours}:{minutes}
    </h6>
  );
}
