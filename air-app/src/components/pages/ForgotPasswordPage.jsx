import React, { useRef } from "react";
import { Input } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { SIGNIN_ROUTE } from "../../constantes/ConstantRoute";

const ariaLabel = { "aria-label": "description" };

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function ForgotPasswordPage() {
  const resetPassRef = useRef();
  const navigate = useNavigate();

  
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#00BCD4",
        marginTop: "-100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          height: "350px",
          backgroundColor: "#f9f9f9",
          padding: "12px",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          Enter your email address that you used to register. We'll send you an
          email with your username and a link to reset your password.
        </div>
        <div style={{ display: "flex", alignItems: "center", height: "60px" }}>
          <EmailIcon />
          <Input
            inputRef={resetPassRef}
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "18px",
            }}
            fullWidth
            placeholder="Email"
            inputProps={ariaLabel}
          />
        </div>
        <div>
          <ColorButton
            fullWidth
            style={{
              fontSize: "20px",
              backgroundColor: "#E91E63",
              marginTop: "20px",
            }}
            variant="contained"
          >
            RESSET MY PASSWORD
          </ColorButton>
        </div>
        <div
          onClick={() => navigate(SIGNIN_ROUTE)}
          style={{
            color: "#00C2E0",
            marginTop: "25px",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Sign In!
        </div>
      </div>
    </div>
  );
}
