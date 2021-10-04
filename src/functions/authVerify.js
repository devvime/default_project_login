async function authVerify() {
    let token = localStorage.getItem('user_token')
    let verified = []
    if (token != null) {
        await $.ajax({
            type: "GET",
            url: `${window.apiURL}/auth/verify`,
            dataType: 'json',
            headers: { Authorization: 'Bearer ' + token },
            success: function(response) {
                if (response.success) {
                    verified = response.success
                }
            }
        })
    } else {
        location.href = '/login'
    }

    return verified
}

export default authVerify