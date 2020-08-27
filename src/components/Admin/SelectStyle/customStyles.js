const customStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#9ca3b9",
      fontWeight: 400,
    };
  },
  control: (provided, state) => ({
    ...provided,
    color: "#222d39",
    borderRadius: 25,
    backgroundColor: "white",
    paddingLeft: "20px",
    paddingRight: "10px",
  }),
};

export default customStyles;
