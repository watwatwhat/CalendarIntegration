//----グローバル変数定義----//
var calendarForSync = CalendarApp.getCalendarById('XXXXXXXXXXXXXXXXXX');
var subCalendar_1 = CalendarApp.getCalendarById('YYYYYYYYYYYYYYYYYYY');
var subCalendar_2 = CalendarApp.getCalendarById('ZZZZZZZZZZZZZZZZZZZ');

//----メイン関数----//

// //今日のイベントを同期する(デバグ用)
// function syncEventsForToday() {
//   var today = new Date();
//   syncEventsForDay(today, 0);
// }

//今日から1か月後までのイベントを同期する
function syncEventsForAMonth() {
  var today = new Date();
  syncEventsForDay(today, 31);
}

//----サブ関数----//

//特定の期間内のイベントを同期する(すべてコピペする)
function syncEventsForDay(start_date, days) {
  deleteEventsForDay(calendarForSync, start_date, days);
  copyEventsForDay(subCalendar_1, calendarForSync, start_date, days);
  copyEventsForDay(subCalendar_2, calendarForSync, start_date, days);
}

//指定期間内の予定を削除する。(コピーペーストの前段階として)
function deleteEventsForDay(calendar, start_date, days) {
  var events = getEventsForDays(calendar, start_date, days);
  events.forEach(function(e) {
    e.deleteEvent();
  });
}

//subCalendarからCalendarForSyncに予定をコピーする
function copyEventsForDay(originalCalendar, newCalendar, start_date, days) {
  var events = getEventsForDays(originalCalendar, start_date, days);
  events.forEach(function(e) {
    if (e.isAllDayEvent()) {
      newCalendar.createAllDayEvent(e.getTitle(), e.getAllDayStartDate(), {description: e.getDescription(), location: e.getLocation()});
    } else {
      newCalendar.createEvent(e.getTitle(), e.getStartTime(), e.getEndTime(), {description: e.getDescription(), location: e.getLocation()});
    }
  });
}

//
function getEventsForDays(calendar, start_date, days) {
  if (days == 0) {
    var events = calendar.getEventsForDay(start_date);
    return events;
  } else {
    var end_time = new Date(start_date.getTime() + (days * 24 * 60 * 60 * 1000));
    var events = calendar.getEvents(start_date, end_time);
    return events;
  }
}
