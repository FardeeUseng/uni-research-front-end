import { Button, DatePicker, Input, Typography } from "../../components/ui";

export default function UI() {
  return (
    <div className='flex flex-col items-start'>
      <Button type='primary'>Button</Button>
      <DatePicker />
      <DatePicker.RangePicker />
      <Input />
      <Input.TextArea rows={4} />
      <Typography >Hello</Typography>
      <Typography.Title >Hello</Typography.Title>
      <Typography.Text >Hello</Typography.Text>
    </div>
  )
}
