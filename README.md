4* - 1000108, так как все элементы суммы будут преобразованы в отдельные строки.

5* - при использовании async скрипт будет загружаться одновременно с body (в зависимости от того, в какой части он проиписан) и выполняться сразу по окончании загрузки. при использовании defer скрипт тоже будет загружаться так же как при использовании async, но при этом выполнится только после полной загрузки страницы.
