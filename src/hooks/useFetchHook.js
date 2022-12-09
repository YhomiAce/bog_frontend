import { useEffect, useState } from "react";
import Axios from "../config/config";

const useFetchHook = (url) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            const res = await Axios.get(url,config);
            const data = res.data;
            setProduct(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { loading, data: product}
}
export default useFetchHook