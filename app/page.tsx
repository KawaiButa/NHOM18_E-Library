"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import BookTag from "./bookTag";

export default function Home() {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <BookTag/>
    </main>
  );
}