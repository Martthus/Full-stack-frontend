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
    history.push("/music/searchMusic")
}

export const goToMusicById = (history: any, id: string): void => {
    history.push(`/music/${id}`)
}

export const goToBack = (history: any): void => {
    history.goBack()
}


