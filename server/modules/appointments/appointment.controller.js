import AppointmentService from "./appointment.service.js";
import asyncHandler from "../../shared/utils/asyncHandler.js";
import ApiResponse from "../../shared/utils/apiResponse.js";

class AppointmentController {
    createAppointment = asyncHandler(async (req, res) => {
        const appointment =
            await AppointmentService.createAppointment(
                req.user.id,
                req.body
            );

        return res.status(201).json(
            new ApiResponse(
                201,
                "Appointment created successfully.",
                appointment
            )
        );
    });

    getMyAppointments = asyncHandler(async (req, res) => {
        const appointments =
            await AppointmentService.getMyAppointments(
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointments fetched successfully.",
                appointments
            )
        );
    });

    getOrganizationAppointments =
        asyncHandler(async (req, res) => {
            const appointments =
                await AppointmentService.getOrganizationAppointments(
                    req.user.id
                );

            return res.status(200).json(
                new ApiResponse(
                    200,
                    "Appointments fetched successfully.",
                    appointments
                )
            );
        });

    updateStatus = asyncHandler(async (req, res) => {
        const appointment =
            await AppointmentService.updateAppointmentStatus(
                req.params.id,
                req.body.status,
                req.user.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointment updated successfully.",
                appointment
            )
        );
    });

    cancelAppointment = asyncHandler(async (req, res) => {
        const appointment =
            await AppointmentService.cancelAppointment(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointment cancelled successfully.",
                appointment
            )
        );
    });

    getAppointmentById = asyncHandler(async (req, res) => {
        const appointment =
            await AppointmentService.getAppointmentById(
                req.params.id
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointment fetched successfully.",
                appointment
            )
        );
    });

    getAllAppointments = asyncHandler(async (req, res) => {
        const appointments =
            await AppointmentService.getAllAppointments();

        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointments fetched successfully.",
                appointments
            )
        );
    });
}

export default new AppointmentController();