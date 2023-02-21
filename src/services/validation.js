import * as Yup from 'yup';
import "yup-phone-lite";

export const privateClientSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    phone: Yup.string()
        .phone("NGN", "Please enter a valid phone number, start with country code (+234)")
        .required("A phone number is required"),
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    terms: Yup.boolean().required("Please accept terms and conditions"),
    password2: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
})

export const adminSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    level: Yup.string().required("Level is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
})

export const loginValidation = Yup.object({
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    password: Yup.string().required('Password is required')
})

export const changePasswordValidation = Yup.object({
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const updatePasswordValidation = Yup.object({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().required('New Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirmPassword: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('newPassword')], 'Your passwords do not match.'),
});

export const forgetPasswordValidation = Yup.object({
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required")
})

export const supplierValidationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    company_name: Yup.string().required("Company name is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    phone: Yup.string()
        .phone("NGN", "Please enter a valid phone number, start with country code (+234)")
        .required("A phone number is required"),
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    terms: Yup.boolean().required("Please accept terms and conditions"),
    password2: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
})

export const servicePartnerValidationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    company_name: Yup.string().required("Company name is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    phone: Yup.string()
        .phone("NGN", "Please enter a valid phone number, start with country code (+234)")
        .required("A phone number is required"),
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    terms: Yup.boolean().required("Please accept terms and conditions"),
    serviceTypeId: Yup.string().required("Please select the type of service you render"),
    password2: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
})

export const corporateClientSchema = Yup.object({
    name: Yup.string().required("Company name is required"),
    email: Yup.string().email("Enter a valid E-mail address").required("E-mail Address is required"),
    phone: Yup.string()
        .phone("NGN", "Please enter a valid phone number, start with country code (+234)")
        .required("A phone number is required"),

    password: Yup.string().required('Password is required').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    terms: Yup.boolean().required("Please accept terms and conditions"),
    password2: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});

export const productSchema = Yup.object({
    name: Yup.string().required("Product title is required"),
    quantity: Yup.number().required("Available quantity is required").min(1, "Quantity should be more than 0"),
    price: Yup.number().required("Product title is required").moreThan(0, "Price cannot be 0"),
    unit: Yup.string().required("Product unit of measurement is required"),
    description: Yup.string().required("Product description is required"),
});

export const projectSchema = Yup.object({
    titel: Yup.string().required("Project title is required"),
    propertyLocation: Yup.string().required("Property Location is required"),
 });

export const categorySchema = Yup.object({
    name: Yup.string().required("Product title is required"),
    description: Yup.string().required("Product description is required"),
});
export const serviceCategorySchema = Yup.object({
    name: Yup.string().required("Service name is required")
});

export const postSchema = Yup.object({
    title: Yup.string().required("Product title is required"),
    description: Yup.string().required("Product description is required"),
});

export const announcementSchema = Yup.object({
    title: Yup.string().required("title is required"),
    content: Yup.string().required("content is required"),
    user: Yup.string().required("Reciever is required"),
    expiredAt: Yup.date().required("Expiration date is required"),
});

export const serviceTypeCategorySchema = Yup.object({
    title: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    serviceId: Yup.string().required("Service rendered is required"),
});

export const projectBidSchema = Yup.object({
    areYouInterested: Yup.string().required("Name is required"),
    deliveryTimeLine: Yup.number().required("Delivery timeline is expected"),
    projectCost: Yup.number().required("How much would it cost to get this project done"),
    reasonOfInterest: Yup.string().required("Select the reason why you're interested"),
});

export const subscriptionPlanSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    amount: Yup.number().required("Amount is required"),
    duration: Yup.number().required("Duration is required"),
});