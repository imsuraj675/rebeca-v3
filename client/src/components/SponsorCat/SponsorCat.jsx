import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";

// Import Icons
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const tiers = [
    { id: 1, name: "BECA SPONSOR", amount: "2.5 LAKH", icon: <ChangeHistoryIcon />, focusColor: "#fbc02d" }, // Green
    { id: 2, name: "ASSOCIATE SPONSOR", amount: "5.0 LAKH", icon: <WidgetsIcon />, focusColor: "#4caf50" }, // Yellow/Gold
    { id: 3, name: "CO-SPONSOR", amount: "8.0 LAKH", icon: <AllInclusiveIcon />, focusColor: "#e91e63" }, // Pink
    { id: 4, name: "TITLE SPONSOR", amount: "10 LAKH", icon: <DiamondIcon />, focusColor: "#1a8fe3" }, // Blue
];

const perksData = {
    1: [
        "Logo on standard event banners",
        "Shared social media mentions",
        "Basic 3x3 stall space allocated",
        "Standard certificate",
    ],
    2: [
        "Logo on main stage side-panels",
        "Dedicated individual social media post",
        "Premium stall space",
        "Passes for 5 reps",
    ],
    3: [
        "Prominent campus logo placement",
        "Video ad playback between artist sets",
        "Prime stall location",
        "VIP seating for 10 guests",
    ],
    4: [
        "Co-branded title: 'REBECA Presented By [Brand]'",
        "Maximum global visibility",
        "On-stage felicitation",
        "Exclusive prime lounge access",
    ],
};

export default function SponsorsCategory() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 2, overflow: "hidden" }}
        >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    // This dynamically changes the indicator color based on the selected tab
                >
                    {tiers.map((tier, index) => (
                        <Tab
                            key={tier.id}
                            icon={tier.icon}
                            iconPosition="top"
                            label={tier.name}
                            sx={{
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                                // Custom color logic
                                "&.Mui-selected": {
                                    color: tier.focusColor,
                                },
                                // Optional: hover effect
                                "&:hover": {
                                    color: tier.focusColor,
                                    opacity: 0.8,
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {/* Content Area */}
            <Box sx={{ p: 2, bgcolor: "background.paper" }}>
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontWeight: 800,
                        color: tiers[value].focusColor, // Text matches the tab color
                        transition: "color 0.3s ease",
                        fontFamily: "var(--heading-font)",
                    }}
                >
                    {tiers[value].amount}
                </Typography>

                <Divider sx={{ my: 3 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontWeight: "bold",
                            color: "text.secondary",
                            fontFamily: "var(--display-font)",
                            fontSize: "1rem",
                            m: 0,
                        }}
                    >
                        PERKS & BENEFITS
                    </Typography>
                </Divider>

                <div className="benefits">
                    {perksData[tiers[value].id].map((perk, i) => {
                        return (
                            <div
                                className="perk"
                                style={{
                                    display: "flex",
                                    fontSize: "1.2rem",
                                    gap: "1rem",
                                    alignItems: "center",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <CheckCircleOutlineIcon sx={{ color: tiers[value].focusColor }} />
                                {perk}
                            </div>
                        );
                    })}
                </div>
            </Box>
        </Box>
    );
}
