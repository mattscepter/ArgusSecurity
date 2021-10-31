import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import {
  getUser,
  updateUser,
} from "../../../../../../context/actions/authActions/getUserAction";
import axiosInstance from "../../../../../../helpers/axiosInstance";

export default function StudentProfleLookup() {
  return (
    <div>
      <PersonalDetails />
      <BackgroundDetails />
      <ContactDetails />
      <JobHistory />
      <JobSearch />
    </div>
  );
}

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "*Required";
    }
    if (!values.gender) {
      errors.gender = "*Required";
    }
    if (!values.weight) {
      errors.weight = "*Required";
    }
    if (!values.height) {
      errors.height = "*Required";
    }
    if (!values.eyeColor) {
      errors.eyeColor = "*Required";
    }
    if (!values.hairColor) {
      errors.hairColor = "*Required";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      dateOfBirth: "",
      gender: "",
      weight: "",
      height: "",
      eyeColor: "",
      hairColor: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      dispatch(updateUser(resetForm, values, "Personal Details updated"));
    },
  });

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="leading-tight text-3xl font-bold text-gray-3 mx-5">
            Personal Details
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-gray-2 font-bold placeholder-red-1"
        >
          <div className="flex flex-col">
            <label> Date of Birth</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none "
              type="date"
              {...getFieldProps("dateOfBirth")}
            />
            {errors.dateOfBirth ? (
              <div className="w-full text-xs text-red-400">
                {errors.dateOfBirth}
              </div>
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex flex-col w-5/12">
              <label> Height</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                placeholder="180 cm"
                type="number"
                min="0"
                max="280"
                {...getFieldProps("height")}
              />
              {errors.height ? (
                <div className="w-full text-xs text-red-400">
                  {errors.height}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col w-5/12">
              <label> Weight</label>
              <input
                className="border-b-2 border-client focus:border-red-1 focus:outline-none"
                placeholder="160 lbs"
                type="number"
                min="0"
                max="500"
                {...getFieldProps("weight")}
              />
              {errors.weight ? (
                <div className="w-full text-xs text-red-400">
                  {errors.weight}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label> Eye Color</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("eyeColor")}
            />
            {errors.eyeColor ? (
              <div className="w-full text-xs text-red-400">
                {errors.eyeColor}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Hair Color</label>
            <input
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("hairColor")}
            />
            {errors.hairColor ? (
              <div className="w-full text-xs text-red-400">
                {errors.hairColor}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Gender</label>
            <select
              className="border-b-2 border-client focus:border-red-1 focus:outline-none"
              {...getFieldProps("gender")}
            >
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Trans</option>
              <option value="others">Others</option>
            </select>
            {errors.gender ? (
              <div className="w-full text-xs text-red-400">{errors.gender}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="mx-auto my-4 w-1/2 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4 bg-red-1 border-red-1 border-double hover:text-red-1 rounded-lg hover:shadow-button-inner"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

const BackgroundDetails = () => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.hasCriminalRecord) {
      errors.hasCriminalRecord = "*Required";
    }
    if (!values.hasVechicle) {
      errors.hasVechicle = "*Required";
    }
    if (!values.hasLicenseToDrive) {
      errors.hasLicenseToDrive = "*Required";
    }
    if (!values.levelOfEducation) {
      errors.levelOfEducation = "*Required";
    }
    if (!values.languagesKnown[0]) {
      errors.languagesKnown = "*Required";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      hasCriminalRecord: "",
      hasVechicle: "",
      hasLicenseToDrive: "",
      levelOfEducation: "",
      languagesKnown: [""],
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      dispatch(updateUser(resetForm, values, "BackGround Details updated"));
    },
  });

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">
            Background Declaration
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black font-bold"
        >
          <div className="flex flex-col">
            <label> Do you have a criminal record ?</label>
            <select
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("hasCriminalRecord")}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasCriminalRecord ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasCriminalRecord}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Do you own a vehicle ?</label>
            <select
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("hasVechicle")}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasVechicle ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasVechicle}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Are you fully licensed to drive ?</label>
            <select
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("hasLicenseToDrive")}
            >
              <option value="" disabled selected></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>

            {errors.hasLicenseToDrive ? (
              <div className="w-full text-xs text-red-400">
                {errors.hasLicenseToDrive}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> What is your highest level of Education?</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("levelOfEducation")}
            />
            {errors.levelOfEducation ? (
              <div className="w-full text-xs text-red-400">
                {errors.levelOfEducation}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Spoken Languages</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("languagesKnown[0]")}
            />
            {errors.languagesKnown ? (
              <div className="w-full text-xs text-red-400">
                {errors.languagesKnown}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactDetails = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = "*Required";
    }
    if (!values.province) {
      errors.province = "*Required";
    }
    if (!values.streetNumber) {
      errors.streetNumber = "*Required";
    }
    if (!values.city) {
      errors.city = "*Required";
    }
    if (!values.street) {
      errors.street = "*Required";
    }
    if (!values.postalCode) {
      errors.postalCode = "*Required";
    }
    if (!values.suite) {
      errors.suite = "*Required";
    }
    if (!values.homePhone) {
      errors.homePhone = "*Required";
    } else if (values.homePhone > 15 && values.homePhone < 6) {
      errors.homePhone = "Number should be in range 6-15";
    }
    if (!values.phone) {
      errors.phone = "*Required";
    } else if (values.phone > 15 && values.phone < 6) {
      errors.phone = "Number should be in range 6-15";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      country: "",
      province: "",
      streetNumber: "",
      city: "",
      street: "",
      postalCode: "",
      suite: "",
      homePhone: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      dispatch(updateUser(resetForm, values, "Contact Details updated"));
    },
  });

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">
            Contact Details
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black font-bold"
        >
          <div className="flex flex-col">
            <label> Country</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("country")}
            />
            {errors.country ? (
              <div className="w-full text-xs text-red-400">
                {errors.country}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> State/Province</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("province")}
            />
            {errors.province ? (
              <div className="w-full text-xs text-red-400">
                {errors.province}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> City</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("city")}
            />
            {errors.city ? (
              <div className="w-full text-xs text-red-400">{errors.city}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Street</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("street")}
            />
            {errors.street ? (
              <div className="w-full text-xs text-red-400">{errors.street}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Street Number</label>
            <input
              type="number"
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("streetNumber")}
            />
            {errors.streetNumber ? (
              <div className="w-full text-xs text-red-400">
                {errors.streetNumber}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Suite</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("suite")}
            />
            {errors.suite ? (
              <div className="w-full text-xs text-red-400">{errors.suite}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Postal Code</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("postalCode")}
            />
            {errors.postalCode ? (
              <div className="w-full text-xs text-red-400">
                {errors.postalCode}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Home Phone</label>
            <input
              type="number"
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("homePhone")}
            />
            {errors.homePhone ? (
              <div className="w-full text-xs text-red-400">
                {errors.homePhone}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Call Phone</label>
            <input
              type="number"
              className="border-b-2 border-black focus:border-red-1 focus:outline-none "
              {...getFieldProps("phone")}
            />
            {errors.phone ? (
              <div className="w-full text-xs text-red-400">{errors.phone}</div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Email</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("email")}
            />
            {errors.email ? (
              <div className="w-full text-xs text-red-400">{errors.email}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

const JobHistory = () => {
  const dispatch = useDispatch();

  const { getFieldProps, handleSubmit, errors, values } = useFormik({
    initialValues: {
      category: "",
      companyName: "",
      companyAddress: "",
      employeeDuration: { from: "", to: "" },
      reasonForLeaving: "",
    },
    onSubmit: async (values, { resetForm }) => {
      dispatch(updateUser(resetForm, values, "Job history updated"));
    },
  });

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">Job History</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black font-bold"
        >
          <div className="flex flex-col">
            <label> Category</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("category")}
            />
            {errors.category ? (
              <div className="w-full text-xs text-red-400">
                {errors.category}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Company Name</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("companyName")}
            />
            {errors.companyName ? (
              <div className="w-full text-xs text-red-400">
                {errors.companyName}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4">
            <label> Address</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("companyAddress")}
            />
            {errors.companyAddress ? (
              <div className="w-full text-xs text-red-400">
                {errors.companyAddress}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mt-4 ">
            <label> Employment Duration</label>
            <div className="w-full flex">
              <input
                className="mr-2 w-full border-b-2 border-black focus:border-red-1 focus:outline-none"
                placeholder="from"
                type="date"
                {...getFieldProps("employeeDuration.from")}
              />
              <label> To</label>
              <input
                className="ml-2 w-full border-b-2 border-black focus:border-red-1 focus:outline-none"
                placeholder="to"
                type="date"
                {...getFieldProps("employeeDuration.to")}
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label> Reason for Leaving</label>
            <input
              className="border-b-2 border-black focus:border-red-1 focus:outline-none"
              {...getFieldProps("reasonForLeaving")}
            />
            {errors.reasonForLeaving ? (
              <div className="w-full text-xs text-red-400">
                {errors.reasonForLeaving}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const JobSearch = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "*Required";
    }
    if (!values.gender) {
      errors.gender = "*Required";
    }
    if (!values.weight) {
      errors.weight = "*Required";
    }
    if (!values.height) {
      errors.height = "*Required";
    }
    if (!values.eyeColor) {
      errors.eyeColor = "*Required";
    }
    if (!values.hairColor) {
      errors.hairColor = "*Required";
    }

    return errors;
  };

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      dateOfBirth: "",
      gender: "",
      weight: "",
      height: "",
      eyeColor: "",
      hairColor: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const token = JSON.parse(localStorage.getItem("jwt"));
      axiosInstance
        .put("/user/update", values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => resetForm())
        .catch((err) => {});
    },
  });

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
        <div className="flex items-center mb-4">
          <span className="inline-block text-red-1">
            <svg
              className="w-14 h-14"
              s
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h1 className="text-lg text-gray-3 font-bold mx-5">Job Search</h1>
        </div>

        <form className="flex flex-col text-black font-bold">
          <label> Are you looking for a job?</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Email me about new opportunities?</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Preferred City of Employment</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Availability</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />
          <label> Wage Range</label>
          <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4" />

          <button className="mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};