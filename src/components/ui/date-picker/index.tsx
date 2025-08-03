import { DatePicker as AntdDatePicker } from "antd"
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";


function DatePicker({ ...rest } : DatePickerProps) {
  return <AntdDatePicker {...rest} />
}

function DateRangePicker({ ...rest } : RangePickerProps) {
  return <AntdDatePicker.RangePicker {...rest} />
}

DatePicker.RangePicker = DateRangePicker;

export default DatePicker;