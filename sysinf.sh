#!/bin/bash

echo -e "\e[1;33m----------------------SHELL----------------------\e[0m"
echo ""
echo "Shell : " $SHELL
echo ""


echo -e "\e[1;33m---------------------SERVICES--------------------\e[0m"
echo ""
activeservice=`service --status-all | grep +`
stoppedservice=`service --status-all | grep -w "[-]"`
echo -e "$activeservice"
echo ""
echo "-----------------------------"
echo ""
echo -e "$stoppedservice"
echo ""


echo -e "\e[1;33m----------------------PORTS----------------------\e[0m"
echo ""
nmap localhost 
echo ""
sudo lsof -i -P -n
echo ""


echo -e "\e[1;33m--------------------MEM-BLOCKS-------------------\e[0m"
echo ""
lsblk
echo ""

echo -e "\e[1;33m-----------------------CPU-----------------------\e[0m"
echo ""
lscpu
echo ""