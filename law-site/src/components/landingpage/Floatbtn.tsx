import { FloatButton } from "antd";

import {
    WhatsAppOutlined
  } from "@ant-design/icons";
  
  const handleRedirect = () => {
    window.location.href = 'http://wa.me/918110011188';
  };
function Floatbtn() {
  return (
    <div>
      <FloatButton
      icon={<WhatsAppOutlined style={{ fontSize: '20px', color: '#25D366' }} />}
      style={{
        right: 3,
        bottom: 4,
      }}
      className="whatsapp-float"
      onClick={handleRedirect}
    />
    </div>
  )
}

export default Floatbtn
