import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import todoListSlice from "../../redux/todoListReducer";
import { todoListSelector } from "../../redux/selectors";
import { v4 as uuid } from "uuid";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleSelectChange = (value) => {
    setPriority(value);
  };
  const handleSubmitTodo = () => {
    if (name)
      dispatch(
        todoListSlice.actions.addTodo({
          id: uuid(),
          name,
          priority,
          completed: false,
        })
      );
    setName("");
    setPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputChange} value={name} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleSubmitTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
