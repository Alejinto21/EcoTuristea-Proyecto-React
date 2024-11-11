import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { verifySecurityQuestions, resetPassword } from '../services/api';

const PasswordRecovery = () => {
    const [formData, setFormData] = useState({
        id_usuario: '',
        answer_1: '',
        answer_2: '',
        new_password: ''
    });
    const [verificationSuccess, setVerificationSuccess] = useState(false);
    const navigate = useNavigate();

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    // Enviar respuestas de preguntas de seguridad para verificación
    const handleVerify = async (e) => {
        e.preventDefault();
        try {
        const response = await verifySecurityQuestions({
            id_usuario: formData.id_usuario,
            answer_1: formData.answer_1,
            answer_2: formData.answer_2
        });
        if (response.success) {
            Swal.fire({
            title: 'Verificación exitosa',
            text: 'Ahora puedes ingresar una nueva contraseña.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
            });
            setVerificationSuccess(true);
        } else {
            Swal.fire({
            title: 'Error',
            text: 'Las respuestas no coinciden.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
            });
        }
        } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Error en la verificación. Por favor, intenta de nuevo.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        }
    };

    // Enviar nueva contraseña al backend
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (formData.new_password.length < 6) {
        Swal.fire({
            title: 'Error',
            text: 'La contraseña debe tener al menos 6 caracteres.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
        }
        try {
        const response = await resetPassword({
            id_usuario: formData.id_usuario,
            new_password: formData.new_password
        });
        Swal.fire({
            title: 'Contraseña actualizada',
            text: response.message,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => navigate('/login'));
        } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo actualizar la contraseña. Intenta de nuevo.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 shadow-lg border rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Recuperación de Contraseña</h2>
        <form onSubmit={verificationSuccess ? handleResetPassword : handleVerify}>
            <div className="mb-4">
            <label htmlFor="id_usuario" className="block text-gray-700 mb-1">ID Usuario</label>
            <input
                type="text"
                id="id_usuario"
                name="id_usuario"
                value={formData.id_usuario}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
            />
            </div>
            {!verificationSuccess ? (
            <>
                <div className="mb-4">
                <label htmlFor="answer_1" className="block text-gray-700 mb-1">Respuesta a la Pregunta 1</label>
                <input
                    type="text"
                    id="answer_1"
                    name="answer_1"
                    value={formData.answer_1}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="answer_2" className="block text-gray-700 mb-1">Respuesta a la Pregunta 2</label>
                <input
                    type="text"
                    id="answer_2"
                    name="answer_2"
                    value={formData.answer_2}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Verificar
                </button>
            </>
            ) : (
            <>
                <div className="mb-4">
                <label htmlFor="new_password" className="block text-gray-700 mb-1">Nueva Contraseña</label>
                <input
                    type="password"
                    id="new_password"
                    name="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                </div>
                <button type="submit" className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700">
                Actualizar Contraseña
                </button>
            </>
            )}
        </form>
        </div>
    );
};

export default PasswordRecovery;
