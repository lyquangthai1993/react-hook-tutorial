import React, {useState} from "react";
import PropTypes from "prop-types";
import "./home.scss";
import {Button} from "reactstrap";
import {useForm, ErrorMessage} from "react-hook-form";
import * as yup from "yup";
import TextBox from "components/TextBox";

const TestSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  favor: yup.string().required("Favor is required"),
});

const Home = (props) => {
  const {register, handleSubmit, errors} = useForm({
    defaultValues: {name: "", favor: ""},
    validationSchema: TestSchema,
  });

  const onSubmit = (data) => {
    const {name, favor} = data;
    setTextState(name);
    setFavorState(favor);
  };

  const [textState, setTextState] = useState("");
  const [favorState, setFavorState] = useState("");
  return (
    <div className={"home-wrapper"}>
      <div className="text-center">
        <h2>
          Hello '{textState}', and you like '{favorState}'
        </h2>
        <h3>React hooks form example: </h3>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextBox label="Name" type="text" placeholder="Your name" name={"name"} register={register} errors={errors} />
          <TextBox
            label="Favor"
            type="text"
            placeholder="Your favor"
            name={"favor"}
            register={register}
            errors={errors}
          />
          <Button
            color="primary"
            type="submit"
            onClick={() => {
              setTextState("");
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
