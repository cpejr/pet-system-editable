import { isSeller } from '../../../src/utils/Auth';
import { getById,deleteById } from "../../../src/controllers/Product_GroupController";

export default function handleGroup(req, res) {
  try {
    const { method } = req;
    if (method === "GET") {
      return isSeller(getById)(req, res);
    }
    if (method === "DELETE") {
      return isSeller(deleteById)(req, res);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
}
