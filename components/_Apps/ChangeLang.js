import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MenuItem, Select } from "@mui/material";

function ChangeLang() {
  const router = useRouter();
  const newRouteArr = router.asPath.split("/");
  const [defaultLang, setDefaultLang] = useState(newRouteArr[1]);
  const handleLocaleChange = (event) => {
    const value = event.target.value;
    if (newRouteArr[2] == "benefit") {
      router.push(`/${value}/benefit`);
    } else {
      router.push(`/${value}`);
    }
  };

  useEffect(() => {
    const routeArr = router.asPath.split("/");
    setDefaultLang(routeArr[1]);
  });

  return (
    <div className="change-language">
      <Select
        className={defaultLang + " " + " select"}
        labelId="cz"
        id="cz"
        value={defaultLang}
        label="Age"
        onChange={handleLocaleChange}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
        <MenuItem value="tr">Türkçe</MenuItem>
      </Select>
      <div className="flag"></div>
    </div>
  );
}

export default ChangeLang;
