import { z } from 'zod';

// Zod Schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(1, 'First name is required')
    .max(20, 'First name cannot exceed 20 characters'),
  middleName: z
    .string()
    .max(20, 'Middle name cannot exceed 20 characters')
    .optional(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(1, 'Last name is required')
    .max(20, 'Last name cannot exceed 20 characters'),
});

// Zod Schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z
    .string({ required_error: "Father's name is required" })
    .min(1, "Father's name is required")
    .max(50, "Father's name cannot exceed 50 characters"),
  fatherOccupation: z
    .string({ required_error: "Father's occupation is required" })
    .min(1, "Father's occupation is required")
    .max(50, "Father's occupation cannot exceed 50 characters"),
  fatherContactNo: z
    .string({ required_error: "Father's contact number is required" })
    .min(10, "Father's contact number must be at least 10 characters")
    .max(15, "Father's contact number cannot exceed 15 characters"),
  motherName: z
    .string({ required_error: "Mother's name is required" })
    .min(1, "Mother's name is required")
    .max(50, "Mother's name cannot exceed 50 characters"),
  motherOccupation: z
    .string({ required_error: "Mother's occupation is required" })
    .min(1, "Mother's occupation is required")
    .max(50, "Mother's occupation cannot exceed 50 characters"),
  motherContactNo: z
    .string({ required_error: "Mother's contact number is required" })
    .min(10, "Mother's contact number must be at least 10 characters")
    .max(15, "Mother's contact number cannot exceed 15 characters"),
});

// Zod Schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z
    .string({ required_error: "Local guardian's name is required" })
    .min(1, "Local guardian's name is required")
    .max(50, "Local guardian's name cannot exceed 50 characters"),
  occupation: z
    .string({ required_error: "Local guardian's occupation is required" })
    .min(1, "Local guardian's occupation is required")
    .max(50, "Local guardian's occupation cannot exceed 50 characters"),
  contactNo: z
    .string({ required_error: "Local guardian's contact number is required" })
    .min(10, "Local guardian's contact number must be at least 10 characters")
    .max(15, "Local guardian's contact number cannot exceed 15 characters"),
  address: z
    .string({ required_error: "Local guardian's address is required" })
    .min(1, "Local guardian's address is required")
    .max(100, "Local guardian's address cannot exceed 100 characters"),
});

// Zod Schema for Student
const studentValidationSchema = z.object({
  id: z
    .string({ required_error: 'Student ID is required' })
    .min(1, 'Student ID is required')
    .max(30, 'Student ID cannot exceed 30 characters'),
  password: z
    .string({ required_error: 'Password is required' })
    .max(20, 'Password cannot exceed 30 characters'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required',
    invalid_type_error: 'Gender must be male, female, or other',
  }),
  dateOfBirth: z
    .string()
    .max(10, 'Date of birth cannot exceed 10 characters')
    .optional(),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format')
    .max(50, 'Email cannot exceed 50 characters'),
  contactNo: z
    .string({ required_error: 'Contact number is required' })
    .min(10, 'Contact number must be at least 10 characters')
    .max(15, 'Contact number cannot exceed 15 characters'),
  emergencyContactNo: z
    .string({ required_error: 'Emergency contact number is required' })
    .min(10, 'Emergency contact number must be at least 10 characters')
    .max(15, 'Emergency contact number cannot exceed 15 characters'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z
    .string({ required_error: 'Present address is required' })
    .min(1, 'Present address is required')
    .max(100, 'Present address cannot exceed 100 characters'),
  permanentAddress: z
    .string({ required_error: 'Permanent address is required' })
    .min(1, 'Permanent address is required')
    .max(100, 'Permanent address cannot exceed 100 characters'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z
    .string()
    .max(100, 'Profile image URL cannot exceed 100 characters')
    .optional(),
  isActive: z
    .enum(['active', 'blocked'], {
      required_error: 'Account status is required',
    })
    .default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
