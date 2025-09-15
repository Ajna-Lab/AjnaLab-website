import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import HealthcareSolutionsPage from '../pages/HealthcareSolutionsPage'
import BookDemoPage from '../pages/BookDemoPage'
import BlogPage from '../pages/BlogPage'
import PageNotFound from '../pages/PageNotFound'
import SingleBlogPage from '../pages/SingleBlogPage'
import CareersPage from '../pages/CareerPage'
import ServicesPage from '../pages/ServicesPage'
import TestimonialsPage from '../pages/TestimonialsPage'
import ContactUsPage from '../pages/ContactUsPage'
import PalikaCarePage from '../pages/PalikaCarePage'
import ClinicProPage from '../pages/ClinicProPage'
import ClinicCarePage from '../pages/ClinicCarePage'
import AjnaHOSStandardPage from '../pages/AjnaHOSStandardPage'
import AjnaHOSEnterprisePage from '../pages/AjnaHOSEnterprisePage'
import SingleCareerPage from '../pages/SingleCareerPage'
import ResourcesPage from '../pages/ResourcesPage'
import GalleryPage from '../pages/GalleryPage'
import WhitePaperPage from '../pages/WhitePaperPage'
import CaseStudiesPage from '../pages/CaseStudiesPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/healthcare-solutions"
          element={<HealthcareSolutionsPage />}
        />
        <Route path="/book-a-demo" element={<BookDemoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SingleBlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/career/:id" element={<SingleCareerPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/palika-care" element={<PalikaCarePage />} />
        <Route path="/clinic-pro" element={<ClinicProPage />} />
        <Route path="/clinic-care" element={<ClinicCarePage />} />
        <Route path="/ajna-hos-standard" element={<AjnaHOSStandardPage />} />
        <Route
          path="/ajna-hos-enterprise"
          element={<AjnaHOSEnterprisePage />}
        />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/whitepapers" element={<WhitePaperPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
