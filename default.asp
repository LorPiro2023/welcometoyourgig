<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "welcometoyourgig.com" or host = "www.welcometoyourgig.com" then
response.redirect("https://www.welcometoyourgig.com/")

else
response.redirect("https://www.welcometoyourgig.com/error.htm")

end if
%>
