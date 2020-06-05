import React, {useState} from "react";
import PropTypes from "prop-types";
import "./home.scss";
import {Button} from "reactstrap";
import {useForm, ErrorMessage} from "react-hook-form";
import * as yup from "yup";

const TestSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

const Home = (props) => {
  const {register, handleSubmit, watch, errors} = useForm({
    defaultValues: {name: ""},
    validationSchema: TestSchema,
  });
  console.log(errors);
  const onSubmit = (data) => {
    const {name} = data;
    setTextState(name);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  const [textState, setTextState] = useState("");
  return (
    <div className={"home-wrapper"}>
      <h2>Hello '{textState}'</h2>
      <h3>React hooks example: </h3>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input className="form-control" placeholder="Your name" name="name" ref={register} />
            <ErrorMessage as={<p className="text-danger" />} errors={errors} name="name" />
          </div>

          <Button
            color="primary"
            type="submit"
            onClick={() => {
              setTextState("");
            }}
          >
            Set text
          </Button>
        </form>
      </div>
    </div>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
