html_master <- c()
for(i in 1:3){
pmjay_hospt <- 'https://hospitals.pmjay.gov.in/Search/empnlWorkFlow.htm'
req_params <- list("actionFlag"=  'ViewRegisteredHosptlsNew',
                   "search"=  'Y',
                   "appReadOnly"= 'Y',
                   "pageNo"=  i,
                   "searchState"= 23,
                   "searchDistrict"=  411,
                   "searchHospType"=  -1,
                   "searchSpeciality"=    -1,
                   "noOfPages"=   0)

response <- httr::VERB(verb = 'POST', url = pmjay_hospt, body = req_params, encode = 'form')
response_content <- httr::content(response)

html_table <- response_content %>% html_nodes(xpath = '/html/body/div[1]/form/div[3]/section/table') %>% html_table()
html_table <- html_table[[1]]
html_master <- dplyr::bind_rows(html_master, html_table)
}

write.csv(html_master,"~/Downloads/PNJAY_empaneled_jabalpur.csv", row.names = FALSE)
spl <- response_content %>% html_nodes(xpath = '/html/body/div[1]/form/div[5]') %>% html_text()
spl <- stringr::str_replace_all(string = spl,pattern = '[\\n\\t\\r]',replacement = ' ') %>% stringr::str_squish()
