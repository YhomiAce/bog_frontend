import * as ActionType from '../type';
import axios from '../../config/config';
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


export const fetchProducts = (payload) => {
    return {
        type: ActionType.FETCH_PRODUCTS,
        payload
    }
}

export const fetchCategory = (payload) => {
    return {
        type: ActionType.FETCH_CATEGORIES,
        payload
    }
}

export const fetchSimilarProduct = (payload) => {
    return {
        type: ActionType.FETCH_CATEGORY_PRODUCT,
        payload
    }
}

export const fetchUserProduct = (payload) => {
    return {
        type: ActionType.FETCH_USER_PRODUCTS,
        payload
    }
}

export const DeleteProduct = (payload) => {
    return {
        type: ActionType.DELETE_PRODUCT,
        payload
    }
}

export const UpdateProductStatus = (payload) => {
    return {
        type: ActionType.UPDATE_PRODUCT_STATUS,
        payload
    }
}

export const setError = (payload) => {
    return {
        type: ActionType.PRODUCT_ERROR,
        payload
    }
}

export const getProducts = () => {
    return async (dispatch) => {
            try {
                const response = await axios.get('/products/all');
                console.log(response);
                dispatch(fetchProducts(response.data))
            } catch (error) {
                console.log(error.message);
                dispatch(setError(error.message));
                toaster.notify(
                    error.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
            }

    }
}

export const getCategories = () => {
    return async (dispatch) => {
            try {
                const response = await axios.get('/product/category');
                console.log(response);
                dispatch(fetchCategory(response.data))
            } catch (error) {
                console.log(error.message);
                dispatch(setError(error.message));
                toaster.notify(
                    error.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
            }

    }
}

export const getSimilarProduct = (category) => {
    return async (dispatch) => {
            try {
                const url = `/products/similar-products?categoryId=${category}`
                const response = await axios.get(url);
                console.log(response);
                dispatch(fetchSimilarProduct(response.data))
            } catch (error) {
                console.log(error.message);
                dispatch(setError(error.message));
                toaster.notify(
                    error.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
            }

    }
}

export const getUserProducts = (category) => {
    return async (dispatch) => {
            try {
                const response = await axios.get('/products');
                console.log(response);
                dispatch(fetchUserProduct(response.data))
            } catch (error) {
                console.log(error.message);
                dispatch(setError(error.message));
                toaster.notify(
                    error.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
            }

    }
}

export const removeProduct = (productId, saveLoading) => {
    return async (dispatch) => {
            try {
                const url = `/product/${productId}`
                const response = await axios.delete(url);
                console.log(response);
                dispatch(DeleteProduct(productId));
                saveLoading();
                Swal.fire({
                    title: "Success",
                    imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                    imageWidth: "75px",
                    text: "Product deleted successfully",
                    buttonsStyling: "false",
                    confirmButtonText: "Continue",
                    confirmButtonColor: "#3F79AD",
                })
            } catch (error) {
                console.log(error?.response?.data?.message);
                dispatch(setError(error.message));
                saveLoading();
                toaster.notify(
                    error?.response?.data?.message || error.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
            }

    }
}

export const createProduct = (productId, saveLoading) => {
    return async (dispatch) => {
            try {
                const url = `/product/${productId}`
                const response = await axios.delete(url);
                console.log(response);
                dispatch(DeleteProduct(productId));
                saveLoading();
                Swal.fire({
                    title: "Success",
                    imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                    imageWidth: "75px",
                    text: "Product deleted successfully",
                    buttonsStyling: "false",
                    confirmButtonText: "Continue",
                    confirmButtonColor: "#3F79AD",
                })
            } catch (error) {
                console.log(error?.response?.data?.message);
                dispatch(setError(error.message));
                saveLoading();
                toaster.notify(
                    error?.response?.data?.message || error.message,
                    {
                        duration: "4000",
                        position: "bottom",
                    }
                );
            }

    }
}

export const addProductToStore = (productId, saveLoading) => {
    return async (dispatch) => {
        try {
            const url = `/product/add-to-shop/${productId}`;
            const response = await axios.patch(url);
            console.log(response);
            const payload = {
                productId,
                status: "in_review"
            }
            saveLoading();
            dispatch(UpdateProductStatus(payload));
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: response.message,
                buttonsStyling: "false",
                confirmButtonText: "Continue",
                confirmButtonColor: "#3F79AD",
            });
        } catch (error) {
            saveLoading();
            dispatch(setError(error.message));
            toaster.notify(
                error?.response?.data?.message || error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
}

