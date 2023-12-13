import {   Form,  Input,  Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react'
import { Col, Container, Row,  } from 'react-bootstrap';
import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactUS = () => {
  return (
    <Container>
      <Form
        // onFinish={onFinish}
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        style={{padding:"1em"}}
        >
        <Row>
          <h1>CONTACT US</h1>
        </Row>
        <Row className='py-2'>
          <Col className="mt-5 pt-5">
            {/* Name input */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            {/* Email input */}
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


          </Col>

          <Col className="mt-5 pt-5">
            {/* Skills dropdown */}
            <Form.Item
              label="Subject"
              name="subject"
              rules={[
                { required: true, message: "Enter subject.." },
                {
                  type: "text",
                  message: "Please enter subject",
                },
              ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Enter message" },
                { type: "message"   , message: "message .." },
              ]}
            >
               <TextArea rows={4} />
            </Form.Item>

          </Col>
          <Col>
              <img src="/service-hub-r.png" alt="" srcset="" width={"100%"}/>
          </Col>
        </Row>
        <Row className='py-2'>
            <Button style={{width:"150px"}}>Submit</Button>
        </Row>
      </Form>

    </Container>
  )
}

export default ContactUS;