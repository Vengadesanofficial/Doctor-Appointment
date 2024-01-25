import * as yup  from "yup"


export const docSchema=yup.object({
doc_name:yup.string().required("Please fill in the doctor name").min(3,"minimum three word required").max(15,"name is enough"),
hospital_name:yup.string().required("Please specify hospital name"),
specialization: yup.string().required("Please specify specilization"),


})