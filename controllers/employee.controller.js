import { query } from "../utils/db.js";

export const getAllEmployee = async (req, res, next) => {
  try {
    const response = await query(`SELECT to_regclass('employee_details');`);
    console.log(response);

    if(!response.rows[0].to_regclass){
        await query
    }
  } catch (error) {}
};
