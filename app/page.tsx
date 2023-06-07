"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import BookTag from "./components/bookTag/bookTag";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const url = document.URL + "/landing";
  return <meta http-equiv="Refresh" content={`0; url='${url}'`} />

}
