func isAnagram(s string, t string) bool {
    sChar := strings.Split(s, "")
    tChar := strings.Split(t, "")

    sort.Strings(sChar)
    sort.Strings(tChar)

    if strings.Join(sChar, "") == strings.Join(tChar, "") {
        return true
    } else {
        return false 
    }
}
