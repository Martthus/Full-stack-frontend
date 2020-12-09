export const goToLogin = (history: any): void => {
    history.push("/user/login")
}

export const goToSignUp = (history: any): void => {
    history.push("/user/signup")
}

export const logout = (history: any): void => {
    window.localStorage.removeItem("token")
    history.push("/user/login")
}

export const goToAllMusics = (history: any): void => {
    history.push("/music/all")
}

export const goToSearchMusic = (history: any): void => {
    history.push("/searchMusic")
}

export const goToBack = (history: any): void => {
    history.goBack()
}


