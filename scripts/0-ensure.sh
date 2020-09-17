#!/bin/bash
function ensure::jq() {
	REQUIRED_PKG=jq
	PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $REQUIRED_PKG|grep "install ok installed")
	echo "Checking for $REQUIRED_PKG: {STATUS} $PKG_OK"
	if [ "" = "$PKG_OK" ]; then
	  echo "⛔ No $REQUIRED_PKG. Setting up $REQUIRED_PKG."
	  sudo apt-get --yes install $REQUIRED_PKG 
	fi
}

function ensure::curl() {
	REQUIRED_PKG=curl
	PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $REQUIRED_PKG|grep "install ok installed")
	echo "Checking for $REQUIRED_PKG: {STATUS} $PKG_OK"
	if [ "" = "$PKG_OK" ]; then
	  echo "⛔ No $REQUIRED_PKG. Setting up $REQUIRED_PKG."
	  sudo apt-get --yes install $REQUIRED_PKG 
	fi
}