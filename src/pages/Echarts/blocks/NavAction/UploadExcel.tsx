import { Button, Upload, message } from 'antd';
import * as XLSX from 'xlsx';
import type { UploadProps } from 'antd';
import styles from '../../index.less';
import { convert } from './components/convert';
import { useModel } from '@umijs/max';

const UploadExcel = () => {
  const { setWaferMapData, changeColor, mode } = useModel('useEchartsModel');
  // const [fileName, setFileName] = useState('');

  const handleBeforeUpload = (file) => {
    let data = []; // 存储获取到的数据 // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    // setFileName(file.name);
    // if (fileName === file.name) {
    //   message.error('当前已是该文件内容');
    //   return;
    // }
    fileReader.readAsBinaryString(file); //二进制
    fileReader.onload = (event: any) => {
      try {
        // excel 数据变成数组
        const { result } = event.target; // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' }); // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(
              XLSX.utils.sheet_to_json(workbook.Sheets[sheet]),
            ); // break; // 如果只取第一张表，就取消注释这行
          }
        }
        const excelDataObj = convert(data, changeColor);
        setWaferMapData(excelDataObj);
      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        message.error('Parsing file error');
        return;
      }
    };
  };

  const props: UploadProps = {
    accept: '.csv',
    showUploadList: false,
    beforeUpload: handleBeforeUpload,
    listType: 'text',
    disabled: mode,
  };

  return (
    <div className={styles['nav-gap']}>
      <Upload {...props}>
        <Button disabled={mode} type="primary" size="small">
          Upload File
        </Button>
      </Upload>
    </div>
  );
};

export default UploadExcel;
