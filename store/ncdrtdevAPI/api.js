import axios from "axios"
const ncdrtdevAPI = axios.create({
  baseURL: "https://ncdrt-dev-102525.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ncdrtdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_bnfrh_list(payload) {
  return ncdrtdevAPI.get(`/api/v1/bnfrh/`)
}
function api_v1_bnfrh_create(payload) {
  return ncdrtdevAPI.post(`/api/v1/bnfrh/`, payload)
}
function api_v1_bnfrh_retrieve(payload) {
  return ncdrtdevAPI.get(`/api/v1/bnfrh/${payload.id}/`)
}
function api_v1_bnfrh_update(payload) {
  return ncdrtdevAPI.put(`/api/v1/bnfrh/${payload.id}/`, payload)
}
function api_v1_bnfrh_partial_update(payload) {
  return ncdrtdevAPI.patch(`/api/v1/bnfrh/${payload.id}/`, payload)
}
function api_v1_bnfrh_destroy(payload) {
  return ncdrtdevAPI.delete(`/api/v1/bnfrh/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return ncdrtdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return ncdrtdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vbcbc_list(payload) {
  return ncdrtdevAPI.get(`/api/v1/vbcbc/`)
}
function api_v1_vbcbc_create(payload) {
  return ncdrtdevAPI.post(`/api/v1/vbcbc/`, payload)
}
function api_v1_vbcbc_retrieve(payload) {
  return ncdrtdevAPI.get(`/api/v1/vbcbc/${payload.id}/`)
}
function api_v1_vbcbc_update(payload) {
  return ncdrtdevAPI.put(`/api/v1/vbcbc/${payload.id}/`, payload)
}
function api_v1_vbcbc_partial_update(payload) {
  return ncdrtdevAPI.patch(`/api/v1/vbcbc/${payload.id}/`, payload)
}
function api_v1_vbcbc_destroy(payload) {
  return ncdrtdevAPI.delete(`/api/v1/vbcbc/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return ncdrtdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return ncdrtdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return ncdrtdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ncdrtdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return ncdrtdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bnfrh_list,
  api_v1_bnfrh_create,
  api_v1_bnfrh_retrieve,
  api_v1_bnfrh_update,
  api_v1_bnfrh_partial_update,
  api_v1_bnfrh_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_vbcbc_list,
  api_v1_vbcbc_create,
  api_v1_vbcbc_retrieve,
  api_v1_vbcbc_update,
  api_v1_vbcbc_partial_update,
  api_v1_vbcbc_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
