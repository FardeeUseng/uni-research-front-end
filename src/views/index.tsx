import { IdcardOutlined, SearchOutlined, TableOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "../components/ui";
import { Radio } from "antd";

export default function Home() {
  return (
    <div>
      <div className="flex gap-x-2 justify-center">
        <div className="flex justify-center items-center py-5 px-3 min-w-48 bg-white shadow-xl rounded-lg">
          <Typography.Title level={4} className="text-center">
            ทั้งหมด
          </Typography.Title>
        </div>
        <div className="flex justify-center items-center py-5 px-3 min-w-48 bg-white shadow-xl rounded-lg">
          <Typography.Title level={4} className="text-center">
            คณะวิทยาศาสตร์และเทคโนโลยี
          </Typography.Title>
        </div>
        <div className="flex justify-center items-center py-5 px-3 min-w-48 bg-white shadow-xl rounded-lg">
          <Typography.Title level={4} className="text-center">
            คณะอิสลามศึกษาและนิติศาสตร์
          </Typography.Title>
        </div>
        <div className="flex justify-center items-center py-5 px-3 min-w-48 bg-white shadow-xl rounded-lg">
          <Typography.Title level={4} className="text-center">
            คณะศิลปศาสตร์และสังคมศาสตร์
          </Typography.Title>
        </div>
        <div className="flex justify-center items-center py-5 px-3 min-w-48 bg-white shadow-xl rounded-lg">
          <Typography.Title level={4} className="text-center">
            คณะศึกษาศาสตร์
          </Typography.Title>
        </div>
      </div>

      <div className="my-5">
        <div className="flex gap-x-2">
          <Radio.Group className="w-28" value="default">
            <Radio.Button value="large">
              <TableOutlined />
            </Radio.Button>
            <Radio.Button value="default">
              <IdcardOutlined />
            </Radio.Button>
          </Radio.Group>
          <Input
            placeholder="ค้นหา วิทยานิพนจ์ / สารนิพจน์"
            addonAfter={<SearchOutlined />}
          />
        </div>

        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="h-20 flex items-center justify-center">
              Image
            </div>
            <div className="p-3">
              <Typography.Title level={5}>
                ชื่อวิจัย : 
              </Typography.Title>
              <Typography>
                Description : 
              </Typography>
              <Typography>
                หมวดหมู่ : 
              </Typography>
              <Typography>
                จำนวนอ่าน/ดาวน์โหลด : 
              </Typography>
              <Button type="primary" className="w-full mt-2">
                View
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl">

          </div>
          <div className="bg-white rounded-lg shadow-xl">
            
          </div>
          <div className="bg-white rounded-lg shadow-xl">
            
          </div>
        </div>
      </div>

      <div>
        <Typography.Title level={2}>
          รายการยอดนิยม
        </Typography.Title>
        <div className="grid grid-cols-4 gap-5 mt-3">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="h-20 flex items-center justify-center">
              Image
            </div>
            <div className="p-3">
              <Typography.Title level={5}>
                ชื่อวิจัย : 
              </Typography.Title>
              <Typography>
                Description : 
              </Typography>
              <Typography>
                หมวดหมู่ : 
              </Typography>
              <Typography>
                จำนวนอ่าน/ดาวน์โหลด : 
              </Typography>
              <Button type="primary" className="w-full mt-2">
                View
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl">

          </div>
          <div className="bg-white rounded-lg shadow-xl">
            
          </div>
          <div className="bg-white rounded-lg shadow-xl">
            
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Typography.Title level={2}>
          ข่าวสาร
        </Typography.Title>
        <div className="grid grid-cols-4 gap-5 mt-3">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="h-20 flex items-center justify-center">
              Image
            </div>
            <div className="p-3">
              <Typography.Title level={5}>
                ชื่อวิจัย : 
              </Typography.Title>
              <Typography>
                Description : 
              </Typography>
              <Typography>
                หมวดหมู่ : 
              </Typography>
              <Typography>
                จำนวนอ่าน/ดาวน์โหลด : 
              </Typography>
              <Button type="primary" className="w-full mt-2">
                View
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl">

          </div>
          <div className="bg-white rounded-lg shadow-xl">
            
          </div>
          <div className="bg-white rounded-lg shadow-xl">
            
          </div>
        </div>
      </div>
    </div>
  )
}
