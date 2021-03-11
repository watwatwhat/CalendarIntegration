# CalendarSync
GAS script for synchronizing multiple Google Calendars into a single one.

複数のGoogleカレンダーを1つのGoogleカレンダーに統合することができます。

**1. 変数を設定する**

var calendarForSync = CalendarApp.getCalendarById('XXXXXXXXXXXXXXXXXX');

var subCalendar_1 = CalendarApp.getCalendarById('YYYYYYYYYYYYYYYYYYY');

var subCalendar_2 = CalendarApp.getCalendarById('ZZZZZZZZZZZZZZZZZZZ');

まずはカレンダーを指定するためのIDを設定しましょう。
XにはOutlookに取り込ませるカレンダーのIDを、Y,ZにはオリジナルのカレンダーのIDを設定しましょう。

**2. トリガーを設定する**

GASエディタから時限トリガーを設定しましょう。
時間主導型(1時間おき)などでよいと思います。

※初期設定では1か月後までを同期することになっていますが、期間変更もパラメータ変更により可能です。
