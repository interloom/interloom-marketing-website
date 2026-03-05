---
layout: base.njk
title: Security and Trust
description: Enterprise-grade security architecture, controls, and governance for security leadership and platform operations teams evaluating Interloom.
---

<section class="pt-24 pb-16 px-4">
  <div class="mx-auto max-w-5xl">
    <p class="text-sm text-fg-3 tracking-wide uppercase">Interloom Security Overview</p>
    <h1 class="text-4xl md:text-5xl font-normal tracking-tight font-serif mt-3">Security and trust for enterprise automation</h1>
    <p class="text-xl md:text-2xl text-fg-3 leading-snug tracking-tight max-w-4xl mt-6">
      Interloom is built for organizations that automate critical business processes and need
      strong, verifiable controls. This page gives security leadership and platform operations teams a practical view of our
      governance model, cloud architecture, and technical safeguards.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eEwV1c880TGi16I1QWst6PTzbawnSjH9mV1e49ihrW3raJf-nKrwUIua0S59qEtt5TkGFmrfr" class="inline-flex items-center h-[32px] bg-fg-1 text-surface-1 px-3 rounded font-medium no-underline hover:opacity-85 transition-opacity">Request security review</a>
      <a href="#technical-controls" class="inline-flex items-center h-[32px] border border-line text-fg-2 px-3 rounded font-medium no-underline hover:bg-surface-3 transition-colors">Explore technical controls</a>
    </div>
  </div>
</section>

<section class="pb-16 px-4">
  <div class="mx-auto max-w-5xl grid gap-4 md:grid-cols-3">
    <div class="rounded-lg border border-line p-5 bg-surface-2">
      <div class="h-10 w-10 flex items-center justify-start">
        <img src="{{ '/images/security/azure-logo.svg' | url }}" alt="Microsoft Azure logo" class="h-10 w-10 object-contain grayscale brightness-0 dark:invert">
      </div>
      <p class="text-sm text-fg-3">Hosting and core platform</p>
      <p class="mt-2 text-lg text-fg-1">Microsoft Azure</p>
      <p class="mt-3 text-sm text-fg-3">Security controls align with Azure-native best practices, including isolation, encryption, and resilient storage.</p>
    </div>
    <div class="rounded-lg border border-line p-5 bg-surface-2">
      <div class="flex items-center gap-2 justify-start">
        <img src="{{ '/images/security/tls-logo.svg' | url }}" alt="TLS security icon" class="h-10 w-10 object-contain">
        <img src="{{ '/images/security/aes-logo.svg' | url }}" alt="AES security icon" class="h-10 w-10 object-contain">
      </div>
      <p class="text-sm text-fg-3">Encryption baseline</p>
      <p class="mt-2 text-lg text-fg-1">AES-256 and TLS 1.2+</p>
      <p class="mt-3 text-sm text-fg-3">Data is protected in transit and at rest across storage, databases, and service communication paths.</p>
    </div>
    <div class="rounded-lg border border-line p-5 bg-surface-2">
      <div class="h-10 w-10 flex items-center justify-start">
        <img src="{{ '/images/security/zitadel-logo.svg' | url }}" alt="ZITADEL logo" class="h-10 w-10 object-contain grayscale brightness-0 dark:invert">
      </div>
      <p class="text-sm text-fg-3">Identity model</p>
      <p class="mt-2 text-lg text-fg-1">Dedicated ZITADEL per customer</p>
      <p class="mt-3 text-sm text-fg-3">Isolated authentication infrastructure with SAML and OIDC support, plus secure fallback authentication options.</p>
    </div>
  </div>
</section>

<section class="py-16 px-4 bg-surface-1">
  <div class="mx-auto max-w-5xl prose">
    <h2>Built for security leadership due diligence and platform operations implementation</h2>
    <p>
      Interloom follows a defense-in-depth approach spanning policy, architecture, and operations.
      Our security program addresses governance expectations for compliance leaders and implementation
      requirements for engineering teams that run production workloads.
    </p>
    <h3>For security leadership teams</h3>
    <ul>
      <li>Security governance with clear ownership across CTO, Staff Engineering, and Product leadership.</li>
      <li>Policy lifecycle with formal review, approval, versioning, and communication for major updates.</li>
      <li>Control framework covering access, network, data, application, configuration, and incident response domains.</li>
      <li>Certification roadmap in progress for ISO 27001:2022, ISO 42001, and TISAX.</li>
    </ul>
    <h3>For platform operations teams</h3>
    <ul>
      <li>Cloud-native architecture on Azure AKS with modular services and secure traffic management.</li>
      <li>Network segmentation and customer-level isolation with dedicated VNets.</li>
      <li>Encryption and secret management integrated across storage, databases, and key infrastructure.</li>
      <li>Resilience strategy with backups, availability zones, and failover-ready infrastructure patterns.</li>
    </ul>
  </div>
</section>

<section class="py-16 px-4" id="certifications">
  <div class="mx-auto max-w-5xl prose">
    <h2>Certification and assurance posture</h2>
    <p>
      Interloom is actively pursuing major security and AI governance certifications, with targeted
      completion in the next 6-9 months. The certification program reflects our commitment to
      transparent, auditable, and repeatable security practices.
    </p>
    <h3>Roadmap certifications</h3>
    <ul>
      <li><strong>ISO 27001:2022</strong> for a structured Information Security Management System (ISMS).</li>
      <li><strong>ISO 42001</strong> for trustworthy AI lifecycle governance, risk management, and impact assessment.</li>
      <li><strong>TISAX</strong> for secure information handling, prototype protection, and GDPR-aligned controls.</li>
    </ul>
    <h3>Cloud assurance baseline</h3>
    <p>
      Interloom runs on Microsoft Azure, which provides a broad compliance foundation including
      certifications and independent assurance frameworks such as ISO 27001, HITRUST, FedRAMP, and SOC reporting.
      Azure infrastructure supports NIST SP 800-53 aligned control requirements and risk management models.
    </p>
  </div>
</section>

<section class="py-16 px-4 bg-surface-1">
  <div class="mx-auto max-w-5xl prose">
    <h2>Security governance and accountability</h2>
    <p>
      Information Security Policies and Guidelines are developed and maintained by Interloom Staff Engineering
      in collaboration with Product and the CTO. Significant updates require CTO review and approval, followed
      by written internal communication to ensure organization-wide awareness and adherence.
    </p>
    <h3>Core security roles</h3>
    <ul>
      <li><strong>Security leadership:</strong> CTO, Staff Engineers, and Head of Product.</li>
      <li><strong>Information users:</strong> employees, contractors, vendors, and approved visitors with system access.</li>
      <li><strong>Managers:</strong> responsible for operational compliance within their teams.</li>
      <li><strong>Engineering and product staff:</strong> implementation and maintenance of technical safeguards.</li>
      <li><strong>Security team function:</strong> policy enforcement, assessments, and incident response coordination.</li>
    </ul>
  </div>
</section>

<section class="py-16 px-4" id="technical-controls">
  <div class="mx-auto max-w-5xl prose">
    <h2>Technical controls in Azure</h2>
    <p>
      Azure operates under a shared responsibility model: Microsoft secures the cloud platform,
      while Interloom secures workloads, configurations, identities, and customer environments within Azure.
    </p>
    <h3>Workload and network architecture</h3>
    <ul>
      <li><strong>Azure Kubernetes Service (AKS):</strong> container orchestration for modular microservices.</li>
      <li><strong>Dedicated Virtual Networks:</strong> each customer environment is isolated to reduce cross-tenant risk.</li>
      <li><strong>Azure Application Gateway:</strong> controlled application traffic routing with TLS termination capabilities.</li>
      <li><strong>Restricted internet exposure:</strong> only essential web ports are exposed where required (80 and 443).</li>
    </ul>
    <h3>Data protection controls</h3>
    <ul>
      <li><strong>Data in transit:</strong> TLS 1.2+ and HTTPS enforcement for service communication.</li>
      <li><strong>Data at rest:</strong> AES-256 encryption for storage and Transparent Data Encryption (TDE) for databases.</li>
      <li><strong>Backup encryption:</strong> encrypted backup sets across protected storage layers.</li>
      <li><strong>Key and secret management:</strong> Azure Key Vault for certificates, secrets, and cryptographic keys.</li>
      <li><strong>Optional customer-managed keys:</strong> additional encryption control via CMK integrations.</li>
    </ul>
  </div>
</section>

<section class="py-16 px-4 bg-surface-1">
  <div class="mx-auto max-w-5xl prose">
    <h2>Identity and access management</h2>
    <p>
      Interloom integrates dedicated ZITADEL instances per customer for identity and authentication,
      enabling strict tenant isolation and enterprise SSO compatibility.
    </p>
    <ul>
      <li>Supports integration with existing <strong>SAML</strong> and <strong>OIDC</strong> identity providers.</li>
      <li>Provides built-in authentication for organizations without an existing IdP.</li>
      <li>Uses role-based access principles and least privilege access patterns.</li>
      <li>Applies multi-factor authentication for management interfaces and privileged access paths.</li>
      <li>Authenticates inbound requests before workloads are reached.</li>
    </ul>
  </div>
</section>

<section class="py-16 px-4">
  <div class="mx-auto max-w-5xl prose">
    <h2>Data separation and tenant isolation</h2>
    <p>
      Interloom supports single-tenant hosting for organizations that require strict isolation boundaries.
      Dedicated customer instances are deployed with isolated infrastructure resources to maximize security,
      performance, and compliance confidence.
    </p>
    <ul>
      <li>Dedicated Kubernetes-based deployment model per single-tenant environment.</li>
      <li>Segregated network resources and configuration domains.</li>
      <li>No shared runtime overlap for isolated deployments.</li>
    </ul>
  </div>
</section>

<section class="py-16 px-4 bg-surface-1">
  <div class="mx-auto max-w-5xl prose">
    <h2>Disaster recovery and operational resilience</h2>
    <p>
      Interloom uses Azure-native resilience patterns to minimize downtime and support business continuity
      requirements across critical operations.
    </p>
    <ul>
      <li><strong>Zone-redundant storage:</strong> multiple copies across physical locations within a region.</li>
      <li><strong>Automated backups:</strong> scheduled backup workflows for databases and critical application states.</li>
      <li><strong>High availability:</strong> availability zones and region failover design patterns.</li>
      <li><strong>Containerized resilience:</strong> load balancing and distributed workloads reduce single points of failure.</li>
      <li><strong>Flexible redundancy options:</strong> support for LRS, ZRS, GRS, and RA-GRS based on customer requirements.</li>
    </ul>
  </div>
</section>

<section class="py-16 px-4">
  <div class="mx-auto max-w-5xl prose">
    <h2>Control domains implemented by Interloom</h2>
    <p>
      Our security framework includes administrative, technical, and operational controls designed to align
      with enterprise risk management and compliance needs:
    </p>
    <ul>
      <li>Access controls (role-based access, least privilege).</li>
      <li>Network controls (firewalls, intrusion detection and prevention patterns).</li>
      <li>Data controls (encryption and data loss prevention strategies).</li>
      <li>Application controls (input validation, code review, secure development practices).</li>
      <li>Configuration controls (hardening, vulnerability scanning, baseline management).</li>
      <li>Identity and access controls (MFA, privileged access management).</li>
      <li>Incident response and disaster recovery procedures.</li>
      <li>Physical and environmental controls via cloud provider security infrastructure.</li>
    </ul>
  </div>
</section>

<section class="pt-8 pb-20 px-4">
  <div class="mx-auto max-w-5xl rounded-lg border border-line bg-surface-2 p-6 md:p-8">
    <h2 class="text-2xl md:text-3xl font-normal tracking-tight font-serif">Security engagement for enterprise customers</h2>
    <p class="mt-4 text-fg-3 max-w-3xl">
      Need a deeper technical or compliance review? We support structured security assessments,
      architecture walkthroughs, and procurement due diligence with your security leadership and platform operations stakeholders.
    </p>
    <div class="mt-6 flex flex-wrap gap-3">
      <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eEwV1c880TGi16I1QWst6PTzbawnSjH9mV1e49ihrW3raJf-nKrwUIua0S59qEtt5TkGFmrfr" class="inline-flex items-center h-[32px] bg-fg-1 text-surface-1 px-3 rounded font-medium no-underline hover:opacity-85 transition-opacity">Schedule security session</a>
      <a href="mailto:contact@interloom.com?subject=Interloom%20Compliance%20Questions" class="inline-flex items-center h-[32px] border border-line text-fg-2 px-3 rounded font-medium no-underline hover:bg-surface-3 transition-colors">Contact security team</a>
    </div>
    <div class="mt-8 text-sm text-fg-3">
      <p><strong>Interloom Technologies GmbH</strong></p>
      <p>Osterwaldstr. 10, 80805 Munich, Germany</p>
      <p>Email: <a href="mailto:contact@interloom.com">contact@interloom.com</a></p>
      <p>Managing Director: Fabian Jakobi | Amtsgericht Muenchen, HRB 287622</p>
    </div>
  </div>
</section>
