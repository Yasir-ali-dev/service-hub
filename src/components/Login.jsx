// Import necessary components and styles from Ant Design
import { Form, Input, Select, Button } from "antd";
// import "antd/dist/antd.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
const { Option } = Select;

const Login = () => {
  // Form submission handler
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Add logic to handle signup, e.g., send data to a server
  };

  const navigate= useNavigate();

  const handleSubmit =()=>{
    navigate("/profile")
  }

  return (
    <div className="m-3 p-3">
   
      <Form
        onFinish={onFinish}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
      >
        <Row style={{height:"80vh"}}>
          <Col className="pt-5">
            {/* Email input */}
            <div className="d-flex justify-content-center my-2">
                <img src="/service-hub-r.png" alt="" />
            </div>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="Password"
              rules={[
                { required: true, message: "Password" },
                { type: "password", message: "Password" },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Signup button */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                Login
              </Button>
              <Link 
                to={"/signup"}
                style={{textDecoration:"none", color:"green", marginLeft:"5px"}}
                >
                  Not Register, Sign Up
              </Link>
            </Form.Item>
          </Col>

          <Col>
            <img src="/main.jpg" width={"100%"} height={"100%"} alt="_image"></img>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;