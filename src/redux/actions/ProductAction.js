import * as ActionType from '../type';
import axios from '../../config/config';
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


export const loading = () => {
    return {
        type: ActionType.LOADING
    }
}

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

export const fetchAdminProduct = (payload) => {
    return {
        type: ActionType.FETCH_ADMIN_PRODUCTS,
        payload
    }
}

export const DeleteProduct = (payload) => {
    return {
        type: ActionType.DELETE_PRODUCT,
        payload
    }
}

export const DeleteProductAdmin = (payload) => {
    return {
        type: ActionType.ADMIN_DELETE_PRODUCT,
        payload
    }
}

export const addProduct = (payload) => {
    return {
        type: ActionType.CREATE_PRODUCT,
        payload
    }
}

export const DeleteCategory = (payload) => {
    return {
        type: ActionType.DELETE_PRODUCT,
        payload
    }
}

export const addCategory = (payload) => {
    return {
        type: ActionType.ADD_CATEGORY,
        payload
    }
}
export const editCategory = (payload) => {
    return {
        type: ActionType.EDIT_CATEGORY,
        payload,
    }
}

export const editProduct = (payload) => {
    return {
        type: ActionType.UPDATE_PRODUCT,
        payload
    }
}

export const UpdateProductStatus = (payload) => {
    return {
        type: ActionType.UPDATE_PRODUCT_STATUS,
        payload
    }
}

export const UpdateAdminProductStatus = (payload) => {
    return {
        type: ActionType.UPDATE_ADMIN_PRODUCT_STATUS,
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
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const response = await axios.get('/products/all', config);
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
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const response = await axios.get('/product/category', config);
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
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const url = `/products/similar-products?categoryId=${category}`
            const response = await axios.get(url, config);
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
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            console.log({ authToken });
            const response = await axios.get('/products', config);
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

export const getAdminProducts = (category) => {
    return async (dispatch) => {
        try {
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const response = await axios.get('/product/admin/get-products', config);
            console.log(response);
            dispatch(fetchAdminProduct(response.data))
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


export const removeProduct = (productId, saveLoading, isAdmin) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `/product/${productId}`
            const response = await axios.delete(url);
            console.log(response);
            if (isAdmin) {
                dispatch(DeleteProductAdmin(productId));
            }else{
                dispatch(DeleteProduct(productId));
            }

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

export const createProduct = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `/products`;
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.post(url, payload, config);
            console.log(response);
            dispatch(addProduct(response.data));
            saveLoading();
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Product created successfully",
                buttonsStyling: "false",
                confirmButtonText: "Continue",
                confirmButtonColor: "#3F79AD",
            })
        } catch (error) {
            saveLoading();
            console.log(error?.response?.data?.message);
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

export const removeCategory = (categoryId, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `/product/category/${categoryId}`
            const response = await axios.delete(url);
            console.log(response);
            dispatch(DeleteCategory(categoryId));
            saveLoading();
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Category deleted successfully",
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

export const updateCategory = (payload, saveLoading, categoryId) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `/product/category/${categoryId}`
            const response = await axios.patch(url, payload);
            console.log(response);
            dispatch(editCategory(payload));
            saveLoading();
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Category updated successfully",
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

export const createCategory = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `/product/category`;

            const response = await axios.post(url, payload);
            console.log(response);
            dispatch(addCategory(response.data));
            saveLoading();
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Category created successfully",
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

export const updateProduct = (payload, productId, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `/product/${productId}`;
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.patch(url, payload, config);
            console.log(response);
            dispatch(editProduct(response.data));
            saveLoading();
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Product updated successfully",
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
            dispatch(loading());
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

export const ApproveProduct = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const url = `product/admin/approve-product`;
            const response = await axios.post(url, payload);
            console.log(response);
            saveLoading();
            dispatch(UpdateAdminProductStatus(payload));
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